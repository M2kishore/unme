const initState = {
    posts: [
        {
            imageURL: '../../assets/postpic.jpg',
            cardTitle: 'Redux Memory',
            cardContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas repudiandae tempore molestiae tempora, perferendis quo, quis vel sunt, assumenda qui nam? Eaque quae quis vel corporis accusantium quas cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto eos aliquam? Ipsum, ipsa fugiat fugit magni nesciunt deleniti tenetur facilis inventore cumque, accusantium soluta? Quod suscipit eum accusamus exercitationem.',
            date: {
                year: '20',
                month: '05',
                day: '09',
            }
        },
        {
            imageURL: '../../assets/postpic.jpg',
            cardTitle: 'Redux Memory',
            cardContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas repudiandae tempore molestiae tempora, perferendis quo, quis vel sunt, assumenda qui nam? Eaque quae quis vel corporis accusantium quas cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto eos aliquam? Ipsum, ipsa fugiat fugit magni nesciunt deleniti tenetur facilis inventore cumque, accusantium soluta? Quod suscipit eum accusamus exercitationem.',
            date: {
                year: '20',
                month: '05',
                day: '09',
            }
        },
        {
            imageURL: '../../assets/postpic.jpg',
            cardTitle: 'Redux Memory',
            cardContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas repudiandae tempore molestiae tempora, perferendis quo, quis vel sunt, assumenda qui nam? Eaque quae quis vel corporis accusantium quas cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto eos aliquam? Ipsum, ipsa fugiat fugit magni nesciunt deleniti tenetur facilis inventore cumque, accusantium soluta? Quod suscipit eum accusamus exercitationem.',
            date: {
                year: '20',
                month: '05',
                day: '09',
            }
        }
    ]
}

const initAction = {
    type: ''
}

const postReducer = (state = initState, action = initAction) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('create project success');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error');
            return state;
        default:
            return state;
    }
}