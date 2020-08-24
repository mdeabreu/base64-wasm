extern crate base64;
use wasm_bindgen::prelude::*;

// Encrypt to base64
#[wasm_bindgen]
pub fn encrypt(cleartext: &str) -> String {
  let encrypted = base64::encode(cleartext.as_bytes());
  //return String::from("base64_encoded_text") + cleartext;
  return encrypted;
}
