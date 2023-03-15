import sequelize from "..";
import { Request, Response } from "express";

import { QuestionsForm } from "./questionsForm.model";

export const createQuestionsForm = async (req: Request, res: Response) => {
  if (Object.keys(req.body).length) {
    try {
      await QuestionsForm.create(req.body).then(() => res.status(200).send("Форма успешно отправлена"));
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.send(422);
  }
};

export const deleteQuestionsForm = async (req: Request, res: Response) => {
  if (req.body.formId) {
    try {
      await QuestionsForm.destroy({ where: { id: req.body.formId } });
      res.status(200).send("Форма успешно удалена");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(422).send("Удаление формы не удалось");
  }
};

export const getAllQuestionsForms = async (req: Request, res: Response) => {
  try {
    const allForms = await QuestionsForm.findAll();
    res.status(200).send(allForms);
  } catch (error) {
    res.send(500).json(error);
  }
};
