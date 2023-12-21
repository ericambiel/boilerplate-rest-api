import { CelebrateError } from 'celebrate';
import { IError } from '../erros/base.error';

export default function celebrateErrorParserHelper(
  err: CelebrateError,
): IError[] {
  const errors: IError[] = [];
  err.details.forEach(celebrateDetail => {
    celebrateDetail.details.forEach(detail => {
      errors.push({
        [detail.path.toString().replace(',', '.')]: detail.message,
      });
    });
  });

  return errors;
}
