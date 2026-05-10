/**
 * @typedef {Object} LeadData
 * @property {string} name
 * @property {string} email
 * @property {string} whatsapp
 * @property {string} city
 * @property {string} profile
 * @property {number} balancimQuantity
 * @property {string} page
 */

const normalizeString = (value) => String(value || '').replace(/\s+/g, ' ').trim()

const cleanWhatsapp = (value) => String(value || '').replace(/\D/g, '').slice(0, 11)

const buildLeadPayload = (data) => ({
  name: normalizeString(data.name),
  email: normalizeString(data.email).toLowerCase(),
  whatsapp: cleanWhatsapp(data.whatsapp),
  city: normalizeString(data.city),
  profile: normalizeString(data.profile),
  balancimQuantity: Number(data.balancimQuantity),
  page: normalizeString(data.page),
  source: 'site',
  status: 'new'
})

const validateLeadPayload = (leadPayload) => {
  if (leadPayload.name.length < 3) return false
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadPayload.email)) return false
  if (leadPayload.whatsapp.length !== 10 && leadPayload.whatsapp.length !== 11) return false
  if (leadPayload.city.length < 2) return false
  if (leadPayload.profile.length < 2) return false
  if (!Number.isInteger(leadPayload.balancimQuantity)) return false
  if (leadPayload.balancimQuantity < 1 || leadPayload.balancimQuantity > 10) return false
  if (!leadPayload.page) return false

  return true
}

/**
 * Salva um novo lead na collection `leads` do Firestore.
 *
 * @param {LeadData} data
 * @returns {Promise<{id: string, status: string}>} ID do documento criado e status do envio
 * @throws {Error} com mensagem clara em caso de falha
 */
export const createLead = async (data) => {
  try {
    const [{ collection, addDoc, serverTimestamp }, { db }] = await Promise.all([
      import('firebase/firestore'),
      import('../lib/firebase')
    ])

    const leadPayload = buildLeadPayload(data)

    if (!validateLeadPayload(leadPayload)) {
      throw new Error('Dados do lead inválidos')
    }

    const leadDocument = {
      ...leadPayload,
      createdAt: serverTimestamp()
    }

    const docRef = await addDoc(collection(db, 'leads'), leadDocument)

    return {
      id: docRef.id,
      status: 'success'
    }
  } catch (error) {
    throw new Error(error.message || 'Não foi possível salvar o lead')
  }
}
