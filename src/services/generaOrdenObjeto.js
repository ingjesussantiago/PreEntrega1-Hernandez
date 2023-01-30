const generaOrdenObjeto = ({
nombre ="",
email ="",
telefono = "",
cart=[],
total = 0,

}) => {
    return {
        comprador:{
            nombre:nombre,
            email:email,
            telefono:telefono,
        },
        items: cart,
        total:total,
        createdAt: new Date ().toLocaleString()
    }
 }

 export default generaOrdenObjeto ;