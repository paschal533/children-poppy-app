import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "05btf032",
  dataset: "production",
  apiVersion: "2021-11-16",
  ignoreBrowserTokenWarning: true,
  useCdn: true,
  token: "skplhY6NmSsgdaj01IMmMEP5t2znxeNEq2HNr3fm9OfFvPyDRalsBJ5KD2ksezg2Cnf5ySeiBj1LhOomjepbXm1DN5b33EUnpS2WozannP079qKxPsbuHRvHaFX73aMHCsqoErkOdcZGWWL9VGl4RPIJGLn8uZZWTCqKfx51N28pODw3z1HV",
});