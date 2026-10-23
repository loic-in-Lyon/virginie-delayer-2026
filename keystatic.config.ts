import { config, fields, collection } from '@keystatic/core';

const commonFields = {
  title: fields.slug({
    name: {
      label: 'Titre de la prestation / formation',
      description: 'Nom principal affiché sur la page du site (ex: Drainage Lymphatique Visage).'
    }
  }),
  subtitle: fields.text({
    label: 'Sous-titre / Accroche',
    description: 'Petite phrase d\'accroche sous le titre principal.'
  }),
  metaTitle: fields.text({
    label: 'Titre SEO Google (Meta Title)',
    description: 'Optionnel. Titre optimisé pour les moteurs de recherche. Si vide, le titre principal sera utilisé.'
  }),
  metaDescription: fields.text({
    label: 'Description SEO Google (Meta Description)',
    description: 'Optionnel. Résumé court (150-160 caractères) affiché sous le titre dans les résultats Google.',
    multiline: true
  }),
  duree: fields.text({
    label: 'Durée',
    description: 'Exemples : "1h", "1 jour", "En autonomie (Accès à vie)".'
  }),
  prix: fields.text({
    label: 'Prix (€)',
    description: 'Indiquez uniquement le montant ou format texte (ex: 99 ou 120 / 85).'
  }),
  prerequis: fields.text({
    label: 'Prérequis',
    description: 'Optionnel. Conditions d\'accès (ex: Ouvert aux débutants, Réservé aux esthéticiennes).'
  }),
  resume: fields.text({
    label: 'Résumé court',
    description: 'Texte court affiché sur les cartes de présentation dans le catalogue.'
  }),
  content: fields.text({
    label: 'Description complète',
    description: 'Présentation détaillée du soin ou de la formation.',
    multiline: true
  }),

  targetAudience: fields.array(
    fields.text({ label: 'Profil / Indication' }),
    {
      label: 'Public visé / Pour qui est ce soin ?',
      description: 'Ajoutez autant de lignes que nécessaire pour préciser à qui s\'adresse cette prestation.',
      itemLabel: props => props.value || 'Nouveau profil'
    }
  ),
  materielRequis: fields.array(
    fields.text({ label: 'Élément requis' }),
    {
      label: 'De quoi avez-vous besoin ? / Matériel',
      description: 'Ajoutez les prérequis matériels ou conditions d\'installation.',
      itemLabel: props => props.value || 'Nouveau matériel'
    }
  ),
  programme: fields.array(
    fields.text({ label: 'Étape / Gestuelle' }),
    {
      label: 'Programme & Gestes techniques',
      description: 'Étapes du programme de formation ou déroulé du soin.',
      itemLabel: props => props.value || 'Nouvelle étape'
    }
  ),
  benefits: fields.array(
    fields.text({ label: 'Bénéfice' }),
    {
      label: 'Bénéfices & Résultats attendus',
      description: 'Points forts et résultats ressentis par les clientes.',
      itemLabel: props => props.value || 'Nouveau bénéfice'
    }
  ),
  faq: fields.array(
    fields.object({
      question: fields.text({ label: 'Question' }),
      answer: fields.text({ label: 'Réponse', multiline: true })
    }),
    {
      label: 'Foire Aux Questions (FAQ)',
      description: 'Ajoutez autant de questions/réponses que nécessaire pour rassurer et booster le SEO.',
      itemLabel: props => props.fields?.question.value || 'Nouvelle question'
    }
  ),

  checkoutUrl: fields.url({
    label: 'Lien de paiement / Réservation (Stripe / Systeme.io / Planity)',
    description: 'Lien externe pour s\'inscrire ou réserver directement.'
  }),
  isNew: fields.checkbox({
    label: 'Badge "Nouveau"',
    description: 'Cochez pour afficher un badge NOUVEAU sur les cartes et sur la page d\'accueil.'
  }),
  featured: fields.checkbox({
    label: 'Mettre en avant sur la page d\'accueil',
    description: 'Cochez pour afficher cette prestation dans la section Coups de cœur / Populaires.'
  }),
  draft: fields.checkbox({
    label: 'Masquer / Archiver',
    description: 'Cochez pour rendre la page totalement invisible sur le site sans la supprimer.'
  })
};

export default config({
  storage: { kind: 'local' },
  collections: {
    soins: collection({
      label: 'Soins (Cabinet)',
      slugField: 'title',
      path: 'src/content/soins/*',
      format: { data: 'json' },
      schema: commonFields
    }),
    formations: collection({
      label: 'Formations Présentiel',
      slugField: 'title',
      path: 'src/content/formations/*',
      format: { data: 'json' },
      schema: commonFields
    }),
    formationsDistance: collection({
      label: 'Formations en Ligne',
      slugField: 'title',
      path: 'src/content/formations-distance/*',
      format: { data: 'json' },
      schema: commonFields
    })
  }
});
