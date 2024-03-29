"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminData = void 0;
const admin_model_1 = require("./admin.model");
const getAdminData = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adminData = yield admin_model_1.Admin.findOne({
            where: {
                login: req.body.login,
                password: req.body.login,
            },
        });
        return adminData;
    }
    catch (error) {
        return error;
    }
});
exports.getAdminData = getAdminData;
//# sourceMappingURL=admin.controller.js.map