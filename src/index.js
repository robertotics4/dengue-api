const express = require('express')
const app = express()

const PORT = 5555
const casos = [
  {
    "id": 1,
    "estado": "Acre",
    "casos_confirmados": 150,
    "casos_suspeitos": 50,
    "mortes": 3
  },
  {
    "id": 2,
    "estado": "Alagoas",
    "casos_confirmados": 300,
    "casos_suspeitos": 100,
    "mortes": 7
  },
  {
    "id": 3,
    "estado": "Amapá",
    "casos_confirmados": 120,
    "casos_suspeitos": 40,
    "mortes": 2
  },
  {
    "id": 4,
    "estado": "Amazonas",
    "casos_confirmados": 200,
    "casos_suspeitos": 80,
    "mortes": 5
  },
  {
    "id": 5,
    "estado": "Bahia",
    "casos_confirmados": 500,
    "casos_suspeitos": 200,
    "mortes": 10
  },
  {
    "id": 6,
    "estado": "Ceará",
    "casos_confirmados": 400,
    "casos_suspeitos": 150,
    "mortes": 8
  },
  {
    "id": 7,
    "estado": "Distrito Federal",
    "casos_confirmados": 250,
    "casos_suspeitos": 80,
    "mortes": 4
  },
  {
    "id": 8,
    "estado": "Espírito Santo",
    "casos_confirmados": 180,
    "casos_suspeitos": 60,
    "mortes": 3
  },
  {
    "id": 9,
    "estado": "Goiás",
    "casos_confirmados": 300,
    "casos_suspeitos": 100,
    "mortes": 6
  },
  {
    "id": 10,
    "estado": "Maranhão",
    "casos_confirmados": 220,
    "casos_suspeitos": 70,
    "mortes": 4
  },
  {
    "id": 11,
    "estado": "Mato Grosso",
    "casos_confirmados": 280,
    "casos_suspeitos": 90,
    "mortes": 5
  },
  {
    "id": 12,
    "estado": "Mato Grosso do Sul",
    "casos_confirmados": 190,
    "casos_suspeitos": 60,
    "mortes": 3
  },
  {
    "id": 13,
    "estado": "Minas Gerais",
    "casos_confirmados": 600,
    "casos_suspeitos": 250,
    "mortes": 12
  },
  {
    "id": 14,
    "estado": "Pará",
    "casos_confirmados": 280,
    "casos_suspeitos": 90,
    "mortes": 5
  },
  {
    "id": 15,
    "estado": "Paraíba",
    "casos_confirmados": 320,
    "casos_suspeitos": 100,
    "mortes": 6
  },
  {
    "id": 16,
    "estado": "Paraná",
    "casos_confirmados": 450,
    "casos_suspeitos": 150,
    "mortes": 9
  },
  {
    "id": 17,
    "estado": "Pernambuco",
    "casos_confirmados": 380,
    "casos_suspeitos": 120,
    "mortes": 7
  },
  {
    "id": 18,
    "estado": "Piauí",
    "casos_confirmados": 200,
    "casos_suspeitos": 70,
    "mortes": 4
  },
  {
    "id": 19,
    "estado": "Rio de Janeiro",
    "casos_confirmados": 550,
    "casos_suspeitos": 180,
    "mortes": 11
  },
  {
    "id": 20,
    "estado": "Rio Grande do Norte",
    "casos_confirmados": 270,
    "casos_suspeitos": 80,
    "mortes": 5
  },
  {
    "id": 21,
    "estado": "Rio Grande do Sul",
    "casos_confirmados": 400,
    "casos_suspeitos": 130,
    "mortes": 8
  },
  {
    "id": 22,
    "estado": "Rondônia",
    "casos_confirmados": 140,
    "casos_suspeitos": 50,
    "mortes": 2
  },
  {
    "id": 23,
    "estado": "Roraima",
    "casos_confirmados": 90,
    "casos_suspeitos": 30,
    "mortes": 1
  },
  {
    "id": 24,
    "estado": "Santa Catarina",
    "casos_confirmados": 320,
    "casos_suspeitos": 100,
    "mortes": 6
  },
  {
    "id": 25,
    "estado": "São Paulo",
    "casos_confirmados": 700,
    "casos_suspeitos": 250,
    "mortes": 15
  },
  {
    "id": 26,
    "estado": "Sergipe",
    "casos_confirmados": 160,
    "casos_suspeitos": 60,
    "mortes": 3
  },
  {
    "id": 27,
    "estado": "Tocantins",
    "casos_confirmados": 180,
    "casos_suspeitos": 70,
    "mortes": 4
  }
]

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({
    appName: 'Dados mockados Dengue',
    description: 'Aplicação utilizada na POC de integração com o PowerBI',
    version: '1.0.0'
  })
})

app.get('/casos-dengue', (request, response) => {
  return response.json({ casos, ultimaAtualizacao: new Date()})
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})