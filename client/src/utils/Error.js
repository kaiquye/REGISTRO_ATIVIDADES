export const ObjetoError = function(message, reload) {
    return ({
        ok: false,
        mensagem : message,
        recarregar : reload ? function() {
            setTimeout(()=>{
                document.location.reload();
            },3000)
        } : false
    })
}