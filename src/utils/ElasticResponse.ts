export interface ElasticResponse {
  product: Product
  score: number
}

export interface Product {
  codeInterne: string
  imageProduit: string
  codeABarre: string
  reference: string
  sku: string
  labelProduit: string
  seoLabelProduit: string
  categorie: string
  sousCategorie: string
  sousSousCategorie: string
  categorieId: number
  collection: string
  breveDescription: string
  description: string
  tags: string
  ficheTechnique: string
  altImage: string
  link: string
  metaDescription: string
  metaTitle: string
  oldOptimizationGrade: string
  newOptimizationGrade: string
  poids: number
  couleur: string
  colorId: any
  marque: string
  marqueId: number
  garantie: string
  stock: number
  fabriqueEn: any
  estRetournable: string
  prixVendeur: number
  prixBrute: number
  prixPromo: number
  lienWebEtVideo: string
  imagePrincipale: string
  imagesSecondaires: string
  sellerId: string
  createdBy: string
}
