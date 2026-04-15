import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

/**
 * @typedef {Object} LeadData
 * @property {string} name
 * @property {string} whatsapp
 * @property {string} state
 * @property {string} [email]
 * @property {string} page
 */

/**
 * Salva um novo lead na collection `leads` do Firestore.
 *
 * @param {LeadData} data
 * @returns {Promise<string>} ID do documento criado
 * @throws {Error} com mensagem clara em caso de falha
 */
export const createLead = async (data) => {
  try {
    const leadPayload = {
      name: data.name,
      whatsapp: data.whatsapp,
      state: data.state,
      email: data.email || '',
      page: data.page,
      source: 'site',
      status: 'new',
      createdAt: serverTimestamp()
    }

    const docRef = await addDoc(collection(db, 'leads'), leadPayload)
    return docRef.id
  } catch (error) {
    console.error('[leadService] Falha ao salvar lead:', error)
    throw new Error(`Não foi possível salvar o lead: ${error.message}`)
  }
}
