myApp.service('ngoService', function() {
    var ngos = [
        {
            name: 'Ngo1',
            category: 'Kids',
            description: 'Ngo for kids',
            location: 3,
            cardImage: 'img/ngo_kids.jpg',
            id: 1
        },  {
            name: 'Ngo2',
            category: 'Elders',
            description: 'Ngo for elders',
            location: 5,
            cardImage: 'img/ngo_kids.jpg',
            id: 2
        },  {
            name: 'Ngo3',
            category: 'Women',
            description: 'Ngo for women',
            location: 7,
            cardImage: 'img/ngo_kids.jpg',
            id: 3
        },  {
            name: 'Ngo4',
            category: 'Blind',
            description: 'Ngo for blind',
            location: 9,
            cardImage: 'img/ngo_kids.jpg',
            id: 4
        }
    ];

    var ngo = {
        name: 'Ngo1',
        category: 'Kids',
        description: 'Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids Ngo for kids',
        location: 3,
        address: 'Okhla, New Delhi',
        phoneNo: 8976626962,
        emailId: 'contact@ngo1.com',
        website: 'www.ngo1.com',
        cardImage: 'img/ngo_kids.jpg',
        id: 1,
        coverImage: "img/ngo_kids_cover.jpg",
        items: [
            {
                name: 'Soap',
                category: 'Personal Care',
                requiredQuantity: '100',
                fulfilledQuantityPercentage: '25',
                donorQuantity: 0
            },  {
                name: 'Soap',
                category: 'Personal Care',
                requiredQuantity: '100',
                fulfilledQuantityPercentage: '25',
                donorQuantity: 0
            },  {
                name: 'Soap',
                category: 'Personal Care',
                requiredQuantity: '100',
                fulfilledQuantityPercentage: '100',
                donorQuantity: 0
            },  {
                name: 'Soap',
                category: 'Personal Care',
                requiredQuantity: '100',
                fulfilledQuantityPercentage: '25',
                donorQuantity: 0
            }
        ]
    };
    
    this.getAllNgos = function() {
        return ngos;
    };

    this.getNgo = function(id) {
        return ngo;
    }
});