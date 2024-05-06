//Utility functions
function get(element) {
    return document.getElementById(element);
}

let currentFlower = null;

/*Flower Arrays*/
const loveFlowers = [ 
    {name: "babyBreath", meaning: "Everlasting Love", category: "Love", image: "images/babyBreath.jpg", description: "Baby's breath represents love"},
    {name: "carnation", meaning: "Fascination, Mother's Love", category: "Love", image: "images/carnation.jpg", description: "Carnations represent motherly love"},
    {name: "daffodil", meaning: "Unequalled Love", category: "Love", image: "images/daffodil.jpg", description: "Daffodils indicate that no one can match the love given"},
    {name: "tulip", meaning: "passion", category: "Love", image: "images/tulip.jpg", description: "Tulips bring the passion of love into this bouquet."},
    {name: "Orchid", meaning: "Love, beauty", category: "Love", image: "images/Orchid.jpg", description: "Orchids indicate both deep romantic love and appreciation of beauty."},
    {name: "Daisy", meaning: "Innocence, Loyal Love", category: "Love", image: "images/Daisy.jpg", description: "Thinking of daisies as 'golden retriever' love, or young love."},
    {name: "Gardenia", meaning: "You're lovely, secret love", category: "Love", image: "images/gardenia.jpg", description: "Gardenias are a useful way of inconspicuously telling someone how you feel."},
    {name: "Morning Glory", meaning: "Affection", category: "Love", image: "images/MorningGlory.jpg", description: "Morning Glory brings different kinds of love into the bouquet, platonic and/or familial, as well as romantic."},
    {name: "Camillia", meaning: "Longing or 'You're Adorable'", category: "Love", image: "images/camelia.jpg", description: "The red is for longing and white to describe affection"},
    {name: "Aster", meaning: "Love, Daintiness", category: "Love", image: "images/aster.jpg", description: "Aster represents the delicate love"},
]

const friendFlowers = [
    {name: "sunflower", meaning: "Adoration", category: "Friendship", image: "images/sunflower.jpg", description: "Sunflower indicates appreciating the recipient."},
    {name: "Apple Blossom", meaning: "Preference", category: "Friendship", image: "images/appleBlossom.jpg", description: "Apple Blossom indicates that you choose the recipient."},
    {name: "Iris", meaning: "Faith, Trust", category: "Friendship", image: "images/iris.jpg", description: "Iris tells the recipient that you have put your trust in them."},
    {name: "Dahlia", meaning: "Good Taste", category: "Friendship", image: "images/dahlia.jpg", description: "Dahlia represents good taste"},
    {name: "Abortivae", meaning: "Unchanging Friendship", category: "Friendship", images: "images/abortivae.jpg", description: "Abortivae is an excellent choice to celebrate a long time friend."}
]

const lossFlowers = [
    {name: "anemone", meaning: "Forsaken", category: "Loss", image: "images/anemone.jpg", description: "Anemone in a bouquet states a feeling of being forsaken."},
    {name: "Poppy", meaning: "Consolation", category: "Loss", image: "images/poppy.jpg", description: "Poppy offers consolation to a recipients loss"},
    {name: "Lemon Balm", meaning: "Sympathy", category: "Loss", image: "images/lemonBalm.jpg", description: "Lemon Balm expresses sympathy."},
    {name: "Marigold", meaning: "Grief", category: "Loss", image: "images/Marigold.jpg", description: "Marigold honors the grief felt by either the sender or receiver."}
]

const illWishFlowers = [
    {name: "Black Dahlia", meaning: "Betrayal & Dishonesty", category: "Ill Wish", image: "images/blackDahlia.jpg", description: "The Black dahlia is used to represent a recipient's dishonesty and the giver's sense of betrayal/"},
    {name: "Snapdragon", meaning: "Deception", category: "Ill Wish", image: "images/snapdragon.jpg", description: "Including snapdragons in a bouquet represents the ill will of deceit and lies."},
    {name: "Tansy", meaning: "Hostile Thoughts", category: "Ill Wish", image: "images/tansy.jpg", description: "Tansy lets the recipient know that you harbor ill and hostile feelings towards them."},
    {name: "Petunia", meaning: "Resentment, anger", category: "Ill Wish", image: "images/petunia.jpg", description: "Including Petunia in your bouquet lets the recipient know you are unhappy with them."},
    {name: "Acanthus", meaning: "Artifice", category: "Ill Wish", image: "images/acanthus.jpg", description: "Artifice means cleverness, trickery, deceit and can be used menacingly or playfully depending on what flowers are paired with the acanthus."},
    {name: "Begonia", meaning: "Beware", category: "Ill Wish", image: "images/begonia.jpg", description: "Begonia lets the recipient know to watch their back."},
    {name: "Borage", meaning: "Bluntness, Directness", category: "Ill Wish", image: "images/borage.jpg", description: "While not malicious, Borage lets the recipient know that you are not messing around."},
    {name: "Burdock", meaning: "Touch-me-not", category: "Ill Wish", image: "images/Burdock.jpg", description: "Borage informs the recipient that you do not wish to be in their presence."},
    {name: "Columbine", meaning: "Foolishness", category: "Ill Wish", image: "images/columbine.jpg", description: "Columbine highlights the foolishness of the recipient"},
    {name: "Geranium", meaning: "Folly, Stupidity", category: "Ill Wish", image: "images/Geranium.jpg", description: "Geranium broadcasts the follies of the recipient."},
    {name: "Lavender", meaning: "Distrust", category: "Ill Wish", image: "images/lavender.jpg", description: "Lavender informs the recipient to be distrustful of someone or something"}
]

const successFlowers = [
    {name: "Holly", meaning: "defense", category: "Success", image: "images/HOlly.jpg", description: "Traditionally hung by the home to protect the homestead and the inhabitants, holly has come to present defense."},
    {name: "Bird of Paradise", meaning: "Liberty, Magnificence", category: "Success", image: "images/BirdOfParadise.jpg", description: "The bright colors and prominence of the bird of paradise reminds the recipient of their freedom and glory."},
    {name: "Gladiolus", meaning: "Integrity, Strength, Victory", category: "Success", image: "images/Gladiolus.jpg", description: "Celebrate the virtues of someone or something by including Gladiolus"},
    {name: "Goldenrod", meaning: "Encouragement", category: "Success", image: "images/Goldenrod.jpg", description: "Goldenrod tells the recipient you are cheering them on from the sidelines."},
    {name: "Hollyhock", meaning: "Ambition", category: "Success", image: "images/hollyhock.jpg", description: "Hollyhock acknowledges the ambition of the project at hand."},
    {name: "Laurel", meaning: "Glory & Honor", category: "Success", image: "images/Laurel.jpg", description: "Adding a bit of green, laurel celebrates the glory of the recipient."},
    {name: "Nasturtium", meaning: "conquest, victory", category: "Success", image: "images/Nasturtium.jpg", description: "Nasturtium celebrates the completion of a trial."},

]

const luckFlowers = [
    {name: "Basil", meaning: "Good wishes", category: "Luck", image: "images/basil.jpg", description: "Basil represents good wishes towards the recipient"},
    {name: "Allium", meaning: "Good Fortune, Patience", category: "Luck", image: "images/Allium.jpg", description: "Allium tells the recipient to be patient and wait for good fortune to arrive."}
]

const thoughtFlowers = [
    {name: "White Clover", meaning: "Think of Me", category: "Thoughtfulness", image: "images/WhiteClover.jpg", description: "White Clover bids the recipient to keep the giver in mind.  Pair this with flowers of romance to entice a partner or with flowers of sympathy and friendship"},
    {name: "Rosemary", meaning: "Remembrance", category: "Thoughtfulness", image: "images/Rosemary.jpg", description: "Rosemary represents remembering others and honoring their memory."},
    {name: "Salvia", meaning: "I think of you", category: "Thoughtfulness", image: "images/Salvia.jpg", description: "Salvia/Sage in a bouquet asks the recipient to think of the giver when they look at the flowers."},
    {name: "Forget-me-not", meaning: "Memories of True love", category: "Thoughtfulness", image: "images/forget-me-not.jpg", description: "Remembering your true love, your feelings of love, are represented by the forget me not flowers."}
]

const apologyFlowers = [
    {name: "Bluebell", meaning: "humility", category: "Apology", image: "images/bluebell.jpg", description: "Including bluebell in a bouquet tells the recipient you feel humiliated over your actions"},
    {name: "Pine", meaning: "Humility, piety", category: "Apology", image: "images/Pine.jpg", description: "Pine brings a nice structural green to the bouquet to accent the meaning of humility"},
    {name: "Lily Of the Valley", meaning: "sweetness, apology", category: "Apology", image: "images/lilyOfTheValley.jpg", description: "Small and delicate, Lily of the Valley offers a quaint apology."},
    {name: "Lotus", meaning: "Regeneration, purity", category: "Apology", image: "images/lotus.jpg", description: "Lotus is the perfect way of clearing the slate"}
]

const otherFlowers = [
    {name: "Calla Lily", meaning: "Beauty", category: "Other", image: "images/CallaLilly.jpg", description: "Pair the Calla Lily with significant flowers to clearly state what is beautiful - the recipient, the goal, life itself?"},
    {name: "Cattail", meaning: "Peace and Prosperity", category: "Other", image: "images/catTail.jpg", description: "Pair cat tail with certain flowers to represent success and good fortune."},
    {name: "Thistle", meaning: "Nobility, Endurance, Warning", category: "Other", image: "images/Thistle.jpg", description: "Carefully combined, thistle and warn against misfortune, ill wishes, and represent the strength of the recipient"},
    {name: "Larkspur", meaning: "Fickleness", category: "Other", image: "images/larkspur.jpg", description: "Larkspur indicates a changeability or indecision."},
    {name: "Oak", meaning: "Strength", category: "Other", image: "images/Oak.jpg", description: "Celebrate strength by including Oak in the bouquet."},
    {name: "Lilac", meaning: "Joy of Youth", category: "Other", image: "images/lilac.jpg", description: "Lilac celebrates the joy and wonder of youth."},
    {name: "Hydrangea", meaning: "Graditude", category: "Other", image: "images/hydrangea.jpg", description: "Hydrangea gives thanks, especially for being understood."},
    {name: "Hibiscus", meaning: "Delicate Beauty", category: "Other", image: "images/hibiscus.jpg", description: "hibiscus in the bouquet represents the delicate beauty of it."},
    {name: "fern", meaning: "magic, fascination", category: "Other", image: "images/fern.jpg", description: "Fern's bit of greenery adds a sense of sparkle and magic to the bouquet."},
    {name: "Foxglove", meaning: "Insecurity", category: "Other", image: "images/foxglove.jpg", description: "Foxglove shows uncertainty and insecurity"}
]

/*bouquet array, to be filled in by user*/
var bouquet = [];

/*display flowers*/
function displayFlowers(flowerCategory) {
    var flowerContainer = get('flower-img-container');
    flowerContainer.innerHTML = '';

    flowerCategory.forEach(flower => {    
        /*add image*/
        const img = document.createElement('img');
        img.src = flower.image;
        img.alt = flower.name;
        img.addEventListener('click', function() {
            // Display modal when image is clicked
            openModal(flower);
        });
        flowerContainer.appendChild(img); 
    })

    if (flowerCategory === bouquet) {
        bouquetDescription();
    }
}

//MODALS
function openModal(flower) {
    currentFlower = flower;
    var modal = get('flowerModal');
    var backdrop = get('modal-backdrop');
    var flowerName = get('flowerName');
    var flowerDescription = get('flowerDescription');

    flowerName.textContent = '';
    flowerDescription.textContent = '';
    
    flowerName.textContent = flower.name;
    flowerDescription.textContent = `Meaning: ${flower.meaning}, Category: ${flower.category}`;
    modal.classList.add('visible');
    backdrop.classList.add('visible');

    //declare new buttons each time
    var addToBouquetButton = get('addToBouquet');
    addToBouquetButton.addEventListener('click', function() {
        // Add flower to bouquet array
        if (bouquet.includes(currentFlower)) {
            console.log('cannot add duplicate flower')
        } else {
            addToBouquet(currentFlower)
        } //endIf - this prevents the cancel button from continuing to listen, only workaround I could find.        
        closeModal();
    }, {once: true});

    var cancelButton = get('cancel');
    cancelButton.addEventListener('click', testClose, {once: true}); //once: true does not seem to be working.    
} //end openModal

function closeModal() {
    var modal = get('flowerModal');
    var backdrop = get('modal-backdrop');

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
} //end closeModal

//BOUQUET
function addToBouquet(flower) {
        bouquet.push(flower);
        console.log("Flower added to bouquet:", flower);
        console.log("Current bouquet:", bouquet);
} //end bouquet Array

function bouquetDescription() {
    var description = get('bouquetDescription');
    description.innerHTML = '';

    bouquet.forEach(flower => {
        var p = document.createElement('p');
        p.textContent = `${flower.name}: ${flower.description}`;

        description.appendChild(p);
    })
}

function clearBouquet() {
    bouquet.length = 0;
    console.log('bouquet value is ' + bouquet.length);

    /*clear container & description*/
    var flowerContainer = get('flower-img-container');
    flowerContainer.innerHTML = '';
    var description = get('bouquetDescription');
    description.innerHTML = '';

    displayFlowers(bouquet);
    clearNoteContent();
    showAddNoteButton();
}

//Note Modal, appears when view button clicked
function showAddNoteButton() {
    if (addNoteHere.classList.contains('hidden')) {
        addNoteHere.classList.remove('hidden');
        console.log('Add Note button shown');
    } else {
        addNoteHere.classList.add('hidden');
        console.log('Add Note button hidden');
    }
}

function openNoteModal() {
    var modal = get('addNoteModal');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
} //end openModal

//close dialogue content box
function closeNoteModal() {
    var text = get('noteContent');
    var modal = get('addNoteModal');
    var backdrop = get('modal-backdrop');

    //clear text
    text.value = '';

    //hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
} //end closeModal

//save blog content
function saveNoteContent() {
    var text = get('noteContent');
    var content = get('displayNoteContent');

    //create content elements
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    //add elements
    newContent.appendChild(newContentText);
    content.appendChild(newContent);

    console.log('Note Saved');
    closeNoteModal(); //runs close/refresh function
} //end saveContent

function clearNoteContent() {
    var text = get('noteContent');
    var content = get('displayNoteContent');

    text.innerHTML = '';
    content.innerHTML = '';
}
//EVENT LISTENERS
window.addEventListener('load', function() {
    var loveButton = get('loveButton');
    var lossButton = get('lossButton');
    var friendButton = get('friendButton');
    var illWishesButton = get('illWishesButton');
    var successButton = get('successButton');
    var luckButton = get('luckButton');
    var thoughtfulButton = get('thoughtfulButton');
    var apologyButton = get('apologyButton');
    var otherButton = get('otherButton');        
    var clearBouquetButton = get('clearBouquetButton');
    var cancelNoteButton = get('cancelNoteButton');
    var saveNoteButton = get('saveNoteButton');
    var addNoteButton = get('addNoteButton');

    //Flowers
    loveButton.addEventListener('click', function() {displayFlowers(loveFlowers)});
    lossButton.addEventListener('click', function() {displayFlowers(lossFlowers)});
    friendButton.addEventListener('click', function() {displayFlowers(friendFlowers)});
    illWishesButton.addEventListener('click', function() {displayFlowers(illWishFlowers)});
    successButton.addEventListener('click', function() {displayFlowers(successFlowers)});
    luckButton.addEventListener('click', function() {displayFlowers(luckFlowers)});
    thoughtfulButton.addEventListener('click', function() {displayFlowers(thoughtFlowers)});
    apologyButton.addEventListener('click', function() {displayFlowers(apologyFlowers)});
    otherButton.addEventListener('click', function() {displayFlowers(otherFlowers)});
    clearBouquetButton.addEventListener('click', function() {clearBouquet(bouquet)});
    //note buttons
    addNoteButton.addEventListener('click', openNoteModal);
    cancelNoteButton.addEventListener('click', closeNoteModal);
    saveNoteButton.addEventListener('click', saveNoteContent);
})

//The only way I could get this to work
var viewButton = get('viewBouquet');
viewButton.addEventListener('click', function() {
    displayFlowers(bouquet);
    showAddNoteButton(); 
});

//troubleshooting why clicking close and then adding a flower to the bouquet duplicates that flower.
function testClose() {
    closeModal();
    console.log('modal is closed');
}