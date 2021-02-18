import { getField, updateField } from 'vuex-map-fields';

export default {
    state() {
        return {
            fields: {
                username: '',
                password: '',
                email: ''
            }
        }
    },
    mutations: {
        updateField
    },
    actions: {},
    getters: {
        getField,
    }
}
