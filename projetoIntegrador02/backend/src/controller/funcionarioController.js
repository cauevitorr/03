import Funcionarios from "../models/funcionarioModel.js"
import { z } from "zod"

//validações
const idSchema = z.object({
    id: z.string().uuid({ message: 'ID inválido.' })
})
const updateSchema = z.object({
    nome: z.string().min(3, { message: "O nome deve conter no mínimo 3 caracteres." }).max(60, { message: "O nome deve conter no máximo 60 caracteres." }),
    cargo: z.string().min(3, { message: "O cargo deve conter no mínimo 3 caracteres." }).max(60, { message: "O cargo deve conter no máximo 60 caracteres." }),
    curso: z.string().min(3, { message: "O curso deve conter no mínimo 3 caracteres." }).max(60, { message: "O curso deve conter no máximo 60 caracteres." }),
    status_curso: z.enum(["pendente", "cursando", "concluida"]),
    data_inicio: z.string().min(11, { message: "O data deve conter no mínimo 11 caracteres." }),
    data_conclusao: z.string().min(11, { message: "O data deve conter no mínimo 11 caracteres." })
})
//controladores
export const getAll = async (request, response) => {
    //GET -> 3333/api/tarefas?pages=1&limit=10

    const page = parseInt(request.query.page) || 1
    const limit = parseInt(request.query.limit) || 10
    const offset = (page - 1) * 10

    try {
        const funcionarios = await Funcionarios.findAndCountAll({
            limit,
            offset,
        })

        const totalPaginas = Math.ceil(funcionarios.count / limit)

        response.status(200).json({
            totalFuncionairos: funcionarios.count,
            totalPaginas,
            paginaAtual: page,
            intensPorPagina: limit,
            proximaPagina: totalPaginas === 0 ? null : `http://localhost:3333/api/funcionairos/page= ${page + 1}`,
            funcionarios: funcionarios.rows
        })
    } catch (error) {
        console.error(error)
        response.status(500).json({ err: "Erro ao buscar os funcionarios" })
    }
}
export const updateFuncionario = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params)
    if (!idValidation.success) {
        response.status(400).json({ message: idValidation.error })
        return
    }

    const id = idValidation.data.id

    const updateValidation = updateSchema.safeParse(request.body)
    if (!updateValidation.success) {
        response.status(400).json({ message: updateValidation.error })
        return
    }

    const { funcionario } = updateValidation.data

    const funcionarioAtualizada = {funcionario}

    try {
        const [numberAffectRow] = await Funcionarios.update(funcionarioAtualizada, { where: { id } })

        if (numberAffectRow <= 0) {
            response.status(404).json({ err: "Funcionario não encontrada." })
            return
        }
        response.status(500).json({ message: "Funcionario atualizada com sucesso." })
    } catch (error) {
        console.error(error)
        response.status(500).json({ err: "Erro ao atualizar o funcionario." })
    }

}
export const deleteFuncionario = async (request, response) => {
    const idValidation = idSchema.safeParse(request.params)
    if (!idValidation.success) {
        response.status(400).json({ message: idValidation.error })
        return
    }

    const id = idValidation.data.id

    try {
        const funcionarioDeletado = await Funcionarios.destroy({
            where: { id }
        })
          console.log(funcionarioDeletado)

        if (funcionarioDeletado === 0) {
            response.status(200).json({ message: "Funcionario não existe" })
            return
        }

        response.status(200).json({ message: "Funcionario excluído." })
    } catch (error) {
        console.error(error)
        response.status(500).json({ message: "Erro ao excluir funcionrio." })
    }
}