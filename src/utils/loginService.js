export default async function loginService(email, password) {
  try {
    const response = await fetch({
      url: "http://localhost:3000/login",
      method: "POST",
      body: {
        email,
        password,
      },
    })

    if (!response) throw new Error("Deu erro no login")

    return response.json()
  } catch (error) {
    throw new Error("Deu erro no login" + error)
  }
}
