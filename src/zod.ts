import z from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18).max(120),
  status: z.boolean(),
  characteristics: z.array(
    z.object({
      name: z.string(),
      value: z.number()
    })
  )
});

type User = z.infer<typeof schema>;


let data: User = {
  name: "Diones",
  email: "diones@gmail.com.br",
  age: 130,
  status: true,
  characteristics: [
    {
      name: 'Mana',
      value: 10
    },
    {
      name: 'Shielding',
      value: 15
    }
  ]
}

const result = schema.safeParse(data);

// if (result.success) {
//   console.log("Deu certo")
//   console.log(result.data)
// }
// else {
//   console.log("Deu problema")
// }

//console.log(result)

//Tipos primitivos
// const patern = z.object({
//   name: z.string(),
//   age: z.number(),
//   active: z.boolean(),
//   date: z.date(),
//   qualquer: z.any(),
//   nunca: z.never()
// });

// const res = patern.parse({
//   name: 'Diones',
//   age: 35,
//   active: true
// })

// console.log(res)

//Campos opcionais
// const patern = z.object({
//   name: z.string(),
//   age: z.number().optional(),
//   sobreNome: z.literal('Alves')
// });

// const res = patern.parse({
//   name: 'Diones',
//   sobreNome: 'Alves'
// })

// console.log(res)


//Validations, Transformations
// const patern = z.object({
//   name: z.string().toUpperCase(), //valida que é uma string e transforma em uma string com letras maiúsculas
//   email: z.string().email().toLowerCase(), //valida que é uma string, email e transforma em uma string com letras minusculas
//   description: z.string().trim(),//valida se é string e retira os espalos em branco no inicio da string e no final
//   cidade: z.string().min(3), //valida se a cidade tem no mínimo 3 caracteres
//   regra: z.string().startsWith('wp_'),//string que começa com 'wp_'
//   imagem: z.string().endsWith('.jpg') //string que termina com '.jpg'
// });

// const res = patern.parse({
//   name: 'Diones',
//   email: 'teste@gmail.com',
//   description: '   alguma qualquer   ',
//   cidade: 'ipu'
// })

// console.log(res)


//Greater Than = GT
//Lower Than = LT
//Greater Than or Equal = GTE
//Greater Than or Equak = LTE
// const patern = z.object({
//   age: z.number().gte(18).int().positive()  //Idade maior que 18 anos, numero inteiro e positvo
// });

// const res = patern.parse({
//   age: 18
// })

// console.log(res)


const patern = z.object({
  email: z.string({
    required_error: 'E-mail é obrigatório',
    invalid_type_error: 'O e-mail precisa ser uma string'
  }).email('E-mail inválido'),
  age: z.number({
    required_error: 'Idade é obrigatória',
    invalid_type_error: 'Idade precisa ser um número'
  }).gte(18, 'Precisa ser maior de idade')
});

const res = patern.parse({
  age: 18,
  email: 'teste@gmail.com'
})

console.log(res)