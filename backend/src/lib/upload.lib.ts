import path from 'path';
import multer from 'multer';
import { generatedId } from './method.lib';

// 이미지 업로더
export const uploader = multer({
  storage: multer.diskStorage({
    destination: function (_, __, cb) {
      cb(null, 'src/public/img');
    },
    filename: function (req, file, cb) {
      const fileName = `${generatedId()}${path.extname(file.originalname)}`;

      cb(null, fileName);
    }
  }),
});
