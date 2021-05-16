import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { ICategory } from '~/interfaces/category'

export interface CategoryState {
    tree: ICategory[];
}

function getDefaultState(): CategoryState {
    return {
        tree: []
    }
}

export const state = getDefaultState

export const mutations: MutationTree<CategoryState> = {
    setTree(state, arr) {
        state.tree = arr
    }
}
export const actions: ActionTree<CategoryState, CategoryState> = {
    getree(state) {
        this.$axios.$get('http://adminka-server.html-css.kz/categories').then((arr: any) => {
            arr.forEach((c: any) => {
                c.children = [];
            });
            arr.forEach((c: any) => {
                if (!c.parent_id) return
                const parent = arr.find((p: any) => p.id === c.parent_id);
                if (parent)
                    parent.children.push(c);
            });
            state.commit('setTree', arr.filter((p: any) => !p.parent_id))
        })
    }
}

export const getters: GetterTree<CategoryState, {}> = {
    tree(store) {
        return store.tree
    }
}
