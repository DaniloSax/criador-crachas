export default {
    state: {
        registers: [],
    },
    mutations: {
        setRegisters(state, registers) {
            state.registers = registers
        },
    },

    getters: {
        registerById: (state) => (id) => {
            return state.registers.find(reg => reg.id === id)
        }
    }
}