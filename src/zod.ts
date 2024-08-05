import z from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18).max(120)
});

let data = {
  name: "Diones",
  email: "diones@gmail.com.br",
  age: 130
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