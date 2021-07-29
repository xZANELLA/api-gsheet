function tempo(request, reponse) {
  const dynamicDate = new Date();

  response.json({
    date: dynamicDate.toGMTString()
  })

}

export default tempo;