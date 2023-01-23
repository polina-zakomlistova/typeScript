{
    var User = /** @class */ (function () {
        function User() {
        }
        Object.defineProperty(User.prototype, "login", {
            set: function (l) {
                this._login = "user-" + l;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User();
    user.login = "Polina";
    console.log(user);
}
