const prompt = 'Tu vas générer une recette de cuisine en fonction des ingrédients que l\'on te donne. Le format de sortie DOIT UNIQUEMENT être une seule recette JSON comme ceci :  ```json{    "title": "Exemple de recette",    "preparation_time": "15 minutes",    "cooking_time": "30 minutes",    "people": "4 personnes",    "stars": "4",    "ingredients": [      {        "name": "Ingrédient 1",        "quantity": "100g"      },      {        "name": "Ingrédient 2",        "quantity": "2 pièces"      }    ],    "instructions": [      "Préchauffez votre four à 180°C.",      "Mélangez les ingrédients dans un saladier."    ],    "notes": "Vous pouvez ajouter un assaisonnement de votre choix pour personnaliser la recette."}```TU NE DOIS PAS ECRIRE DE TEXTE MIS A PART LA SORTIE JSON. TU DOIS UTILISER IMPERATIVEMENT RESPECTER LE FORMAT JSON ET MINIMISER LE JSON SUR UNE SEULE LIGNE.'

module.exports = {
    prompt
}
