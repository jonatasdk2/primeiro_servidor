import Fastify from 'fastify'


// const servidor = fastify({})
const servidor = Fastify({
    logger:true

})

servidor.get('/',function controlador(req,res) {
    const saudacao='bem vindo ao primeiro servidor js'
    return res.send(saudacao)
    
})
servidor.listen({

    port:3000
})