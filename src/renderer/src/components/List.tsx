import { Button, Card } from '@nextui-org/react'
import { Task } from '@renderer/Task'
import { ReactElement } from 'react'

type ListProps = {
  tarefas: Task[]
}

function List({ tarefas }: ListProps): ReactElement {
  return (
    <>
      <h3>Lista de tarefas</h3>

        {tarefas.length > 0 &&
          tarefas.map((tarefa) => (
            <Card key={tarefa.title}>
              <strong>{tarefa.title}</strong>
              <Button isIconOnly color="danger">excluir</Button>
              <Button isIconOnly color="primary">editar</Button>
              <Button isIconOnly color="success">completar</Button>
            </Card>
          ))}
    </>
  )
}

export default List
