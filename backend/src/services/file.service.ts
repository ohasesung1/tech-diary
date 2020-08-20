import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { PostFile } from "../database/models/PostFile";
import { Repository } from "typeorm";

// 의존성 주입 (객체를 인스턴스화 시킬 경우 Service 데코 사용)
@Service()
export class PostFileService {
  // InjectRepository은 Repository를 생성자 주입 해주기 위해 사용한다. (의존성 주입)
  constructor(
    @InjectRepository(PostFile) private readonly postFileRepo: Repository<PostFile>,
  ) { }

  // name, extend로 파일 데이터 저장
  public async createImg(name: string, extend: string) {
    const file = await this.postFileRepo.save({
      name,
      extend,
    });

    return file;
  };
}