/**
 *
 * This middleware validate the payload
 * Two parameter receives Schema and validation stack
 * stack means which types of payload is this body or query
 * @param Schema
 * @param stack
 * @returns
 */
const JoiValidator = (Schema: any, Stack: string = "body") => {
  return (req: any, res: any, next: any) => {
    if (Schema.validate(req[Stack])) {
      const validatePayload = Schema.validate(req[Stack]);
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
