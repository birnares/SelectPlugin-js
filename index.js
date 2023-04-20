import { Select } from "./select/select.js"
import './select/style.scss'


const select = new Select('#select', {
    placeholder: 'Выбери пожалуйста элемент',
    // selectedId: '1',
    data: [
        {id: '1', name: 'Apple'},
        {id: '2', name: 'Xiaomi'},
        {id: '3', name: 'Samsung'},
        {id: '4', name: 'Nothing Phone'},
        {id: '5', name: 'Oppo'},
        {id: '6', name: 'Huawei'},
        {id: '7', name: 'Honor'}
    ],
    onSelect(item) {
        console.log('Selected item: ', item);
    }
})

window.s = select