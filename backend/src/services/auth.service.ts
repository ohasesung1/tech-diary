import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Member } from "../database/models/Member";
import { Repository } from "typeorm";

// 의존성 주입 (객체를 인스턴스화 시킬 경우 Service 데코 사용)
@Service()
export class AuthService {
  // InjectRepository은 Repository를 생성자 주입 해주기 위해 사용한다. (의존성 주입)
  constructor(
    @InjectRepository(Member) private readonly memberRepo: Repository<Member>,
  ) { }

  // memberId, pw로 회원 검색
  public async login(memberId: string, pw: string) {
    const member = await this.memberRepo.findOne({
      where: {
        memberId,
        pw,
      },
    });

    return member;
  };
}