module.exports = function BrokerAnywhere(dispatch){
    const chatHook = event => {
        if(!event.message.toLowerCase().includes('!broker')) return
        
        dispatch.toClient('S_NPC_MENU_SELECT', 1, {type:28})
        return false
    }
    dispatch.hook('C_CHAT', 1, chatHook)
    dispatch.hook('C_WHISPER', 1, chatHook)
}
