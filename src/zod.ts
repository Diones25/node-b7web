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

if (result.success) {
  console.log("Deu certo")
  console.log(result.data)
}
else {
  console.log("Deu problema")
}

//console.log(result)