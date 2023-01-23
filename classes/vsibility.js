"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
{
    class Vehicle {
        constructor() {
            //как в JS приватное, полностью
            _Vehicle_price.set(this, void 0);
        }
        set model(m) {
            this._model = m;
            __classPrivateFieldSet(this, _Vehicle_price, 300, "f");
        }
        get model() {
            return this._model;
        }
        addDamage(damage) {
            this.damages.push(damage);
        }
        isPriceEqual(v) {
            return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f");
        }
    }
    _Vehicle_price = new WeakMap();
    class EuroTrack extends Vehicle {
        setDamage() {
            //можем модифицировать только публичные
            //this.damages
        }
        setRun(km) {
            //можем модифицировать защиненные
            this.run = km / 0.62; //в милях;
        }
    }
    new Vehicle().make = "d";
    //нет ни приватных, ни защищенных свойств
}
