/**
 *
 * @param Schema
 * @returns
 * This middleware validate the payload
 */
const JoiValidator = (Schema: any) => {
  return (req: any, res: any, next: any) => {
    if (Schema.validate(req.body)) {
      const validatePayload = Schema.validate(req.body);
      if (validatePayload.error) {
        return res.status(422).send({
          message: validatePayload.error.message,
        });
      }
    }
    next();
  };
};

export default JoiValidator;
