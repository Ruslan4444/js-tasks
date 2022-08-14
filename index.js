var $aw76Z$joi = require("joi");
var $aw76Z$shortid = require("shortid");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

const $27495cb4fbf098f7$var$passwordSchema = (0, ($parcel$interopDefault($aw76Z$joi))).string().min(3).max(10);
function $27495cb4fbf098f7$export$2e2bcd8739ae039(password) {
    return $27495cb4fbf098f7$var$passwordSchema.validate(password);
}


var $a36400dfe697db87$exports = {};

$parcel$export($a36400dfe697db87$exports, "fetchAllUsers", function () { return $a36400dfe697db87$export$beac2bb3153ee93d; });
$parcel$export($a36400dfe697db87$exports, "fetchUserById", function () { return $a36400dfe697db87$export$744ac9cf41c7e31b; });
$parcel$export($a36400dfe697db87$exports, "updateUserById", function () { return $a36400dfe697db87$export$7bc4f8d8a47f1c58; });
$parcel$export($a36400dfe697db87$exports, "x", function () { return $a36400dfe697db87$export$d141bba7fdc215a3; });
$parcel$export($a36400dfe697db87$exports, "y", function () { return $a36400dfe697db87$export$4a5767248b18ef41; });
$parcel$export($a36400dfe697db87$exports, "addUser", function () { return $a36400dfe697db87$export$7ee7664ce5ce7d6; });

const $a36400dfe697db87$export$beac2bb3153ee93d = ()=>{
    console.log("fetchAllUsers");
};
const $a36400dfe697db87$export$744ac9cf41c7e31b = (id)=>{
    console.log("fetchUserById");
};
const $a36400dfe697db87$export$7bc4f8d8a47f1c58 = (id)=>{
    console.log("updateUserById");
};
const $a36400dfe697db87$export$d141bba7fdc215a3 = 5;
const $a36400dfe697db87$export$4a5767248b18ef41 = "mango";
const $a36400dfe697db87$export$7ee7664ce5ce7d6 = (name)=>{
    const user = {
        id: (0, ($parcel$interopDefault($aw76Z$shortid))).generate(),
        name: name
    };
    console.log(user);
};



console.log($a36400dfe697db87$exports);
console.log((0, $27495cb4fbf098f7$export$2e2bcd8739ae039));
console.log((0, $27495cb4fbf098f7$export$2e2bcd8739ae039)("qweqwefffffffffff"));
(0, $a36400dfe697db87$export$7ee7664ce5ce7d6)("Mango"); // console.log(validate("qwe"));
 // console.log(appi);
 // console.log(fetchAllUsers);
 // console.log(fetchUserById);
 // console.log(updateUserById);
 // console.log(value);
 // console.log(name);


//# sourceMappingURL=index.js.map
