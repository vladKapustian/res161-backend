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
exports.getAllPartnershipRequests = exports.deletePartnershipRequest = exports.createNewPartnershipRequest = void 0;
const partnershipRequest_model_1 = require("./partnershipRequest.model");
const createNewPartnershipRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length) {
        try {
            yield partnershipRequest_model_1.PartnershipRequest.create(req.body).then(() => res.status(200).send("Форма успешно отправлена"));
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.send(422);
    }
});
exports.createNewPartnershipRequest = createNewPartnershipRequest;
const deletePartnershipRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.formId) {
        try {
            yield partnershipRequest_model_1.PartnershipRequest.destroy({ where: { id: req.body.formId } });
            res.status(200).send("Форма успешно удалена");
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(422).send("Удаление формы не удалось");
    }
});
exports.deletePartnershipRequest = deletePartnershipRequest;
const getAllPartnershipRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allRequests = yield partnershipRequest_model_1.PartnershipRequest.findAll();
        res.status(200).send(allRequests);
    }
    catch (error) {
        res.send(500).json(error);
    }
});
exports.getAllPartnershipRequests = getAllPartnershipRequests;
//# sourceMappingURL=partnershipRequest.controller.js.map