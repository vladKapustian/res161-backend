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
exports.getAllQuestionsForms = exports.deleteQuestionsForm = exports.createQuestionsForm = void 0;
const questionsForm_model_1 = require("./questionsForm.model");
const createQuestionsForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length) {
        try {
            yield questionsForm_model_1.QuestionsForm.create(req.body).then(() => res.status(200).send("Форма успешно отправлена"));
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.send(422);
    }
});
exports.createQuestionsForm = createQuestionsForm;
const deleteQuestionsForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.formId) {
        try {
            yield questionsForm_model_1.QuestionsForm.destroy({ where: { id: req.body.formId } });
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
exports.deleteQuestionsForm = deleteQuestionsForm;
const getAllQuestionsForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allForms = yield questionsForm_model_1.QuestionsForm.findAll();
        res.status(200).send(allForms);
    }
    catch (error) {
        res.send(500).json(error);
    }
});
exports.getAllQuestionsForms = getAllQuestionsForms;
//# sourceMappingURL=questionsForm.controller.js.map