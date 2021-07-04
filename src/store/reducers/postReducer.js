import {
    GET_SUCCESSFUL,
    GET_FAILED,
    GET_GETTING
} from '../types/types'
const initState = {
    posts: [
        {
            id: 1,
            imageURL: 'https://quotesnhumor.com/wp-content/uploads/2018/03/Best-Friend-Quotes-True-Friendship-Starts-here.jpg',
            title: 'Redux Memory',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas repudiandae tempore molestiae tempora, perferendis quo, quis vel sunt, assumenda qui nam? Eaque quae quis vel corporis accusantium quas cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto eos aliquam? Ipsum, ipsa fugiat fugit magni nesciunt deleniti tenetur facilis inventore cumque, accusantium soluta? Quod suscipit eum accusamus exercitationem.',
            date: {
                year: '20',
                month: '05',
                day: '09',
            }
        },
        {
            id: 2,
            imageURL: 'https://colleenmichele.com/wp-content/uploads/2021/03/sloth-balloons.jpg',
            title: 'Redux Memory',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas repudiandae tempore molestiae tempora, perferendis quo, quis vel sunt, assumenda qui nam? Eaque quae quis vel corporis accusantium quas cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto eos aliquam? Ipsum, ipsa fugiat fugit magni nesciunt deleniti tenetur facilis inventore cumque, accusantium soluta? Quod suscipit eum accusamus exercitationem.',
            date: {
                year: '20',
                month: '05',
                day: '09',
            }
        },
        {
            id: 3,
            imageURL: 'https://image.shutterstock.com/image-photo/couple-walking-bikes-together-on-260nw-579776500.jpg',
            title: 'Redux Memory',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quas repudiandae tempore molestiae tempora, perferendis quo, quis vel sunt, assumenda qui nam? Eaque quae quis vel corporis accusantium quas cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto eos aliquam? Ipsum, ipsa fugiat fugit magni nesciunt deleniti tenetur facilis inventore cumque, accusantium soluta? Quod suscipit eum accusamus exercitationem.',
            date: {
                year: '20',
                month: '05',
                day: '09',
            }
        }
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_GETTING:
            console.log('Wait rasa fetching pandromla');
            return state;
        case GET_SUCCESSFUL:
            console.log('Kedachutu!');
            return state;
        case GET_FAILED:
            console.log('ada poda dei');
            return state;
        default:
            return state;
    }
}

export default postReducer;