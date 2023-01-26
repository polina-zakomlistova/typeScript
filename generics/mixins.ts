{
    type Constructor = new (...args: any[]) => {};
    type GConstructor<T = {}> = new (...args: any[]) => T;

    class List {
        constructor(public items: string[]) {}
    }

    class Accrordion {
        isOpened: boolean;
    }

    type ListType = GConstructor<List>;

    type AccrordionType = GConstructor<Accrordion>;

    //вариант через класс
    // class ExtendedListClass extends List {
    //     first() {
    //         return this.items[0];
    //     }
    // }

    //через миксин
    //функция, в которую передается класс TBase, возвращается класс ExtendedList, наследующий передарнный TBase. Аля псевдо-конструктор
    function ExtendedList<TBase extends ListType & AccrordionType>(
        Base: TBase
    ) {
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
        isOpened: boolean;
        constructor(public items: string[]) {}
    }

    const list = ExtendedList(AccrodionList); //класс
    const res = new list(['first', 'second']);
    res.first();
    res.isOpened;
    res.items;

    //Миксины используются, когда нужно смешать несколько областей, добавив сторонний функционал.
}
