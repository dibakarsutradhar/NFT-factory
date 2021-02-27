import { pinataAPIKey, pinataSecretAPIKey } from "./keys";

module.exports = (req, res) => {
  req.body(
    `Content-Type`, `multipart/form-data`,
    `pinata_api_key`, `${pinataAPIKey}`,
    `pinata_secret_api_key`, `${pinataSecretAPIKey}`
  )
}