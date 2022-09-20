import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        throw err;
      }
    },
    async logout() {
      await getAuth().signOut();
    },
  },
};
