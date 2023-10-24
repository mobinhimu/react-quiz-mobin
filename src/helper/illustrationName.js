export function illustrationNameConvert(illustration = "Mobin.jpg") {
  const illustrationName = illustration
    .split("/")
    .at(illustration.split("/").length - 1)
    .split(".")
    .at(0);

  return { illustrationName };
}
