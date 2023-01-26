"use strict";
{
    class List {
        constructor(items) {
            this.items = items;
        }
    }
    class Accrordion {
    }
    //вариант через класс
    // class ExtendedListClass extends List {
    //     first() {
    //         return this.items[0];
    //     }
    // }
    //через миксин
    //функция, в которую передается класс TBase, возвращается класс ExtendedList, наследующий передарнный TBase. Аля псевдо-конструктор
    function ExtendedList(Base) {
        return class ExtendedList extends Base {
            first() {
                this.isOpened; //из AccrordionType
                this.first(); //из ListType
                return this.items[0];
            }
        };
    }
    //класс должен содержать все поля, иначе будет ошибка  - таким образом организуется доп.защита
    class AccrodionList {
        constructor(items) {
            this.items = items;
        }
    }
    const list = ExtendedList(AccrodionList); //класс
    const res = new list(['first', 'second']);
    res.first();
    res.isOpened;
    res.items;
    //Миксины используются, когда нужно смешать несколько областей, добавив сторонний функционал.
}
