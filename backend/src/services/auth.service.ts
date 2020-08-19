import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Member } from "../database/models/Member";
import { Repository } from "typeorm";


@Service()
export class AuthService {
  constructor(
    @InjectRepository(Member) private readonly memberRepo: Repository<Member>,
  ) { }

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