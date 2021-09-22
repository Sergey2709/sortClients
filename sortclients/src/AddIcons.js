import clients from './soursData.json';
import male from './icons/male.svg';
import female from './icons/female.svg';

const clientsWithIcons = clients.map(el => {

    if (el.sex === "male"){
        el.icon = male;
    } else {
        el.icon = female;
    }
    return el;
})

export default clientsWithIcons;