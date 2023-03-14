import { Request, Response } from "express";
import { PartnershipRequest } from "./partnershipRequest.model";

export const createNewPartnershipRequest = async (req: Request, res: Response) => {
  if (Object.keys(req.body).length) {
    try {
      await PartnershipRequest.create(req.body).then(() => res.status(200).send("Форма успешно отправлена"));
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.send(422);
  }
};

export const deletePartnershipRequest = async (req: Request, res: Response) => {
  if (req.body.formId) {
    try {
      await PartnershipRequest.destroy({ where: { id: req.body.formId } });
      res.status(200).send("Форма успешно удалена");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(422).send("Удаление формы не удалось");
  }
};

export const getAllPartnershipRequests = async (req: Request, res: Response) => {
  try {
    const allRequests = await PartnershipRequest.findAll();
    res.status(200).send(allRequests);
  } catch (error) {
    res.send(500).json(error);
  }
};
