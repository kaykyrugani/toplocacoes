/**
 * @typedef {Object} LeadData
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {string} city
 * @property {string} profile
 * @property {number} balancimQuantity
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
    const [{ collection, addDoc, serverTimestamp }, { db }] = await Promise.all([
      import('firebase/firestore'),
      import('../lib/firebase')
    ])

    const leadPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      profile: data.profile,
      balancimQuantity: data.balancimQuantity,
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
