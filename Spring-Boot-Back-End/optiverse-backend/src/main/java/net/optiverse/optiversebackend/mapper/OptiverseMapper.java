package net.optiverse.optiversebackend.mapper;

import net.optiverse.optiversebackend.entity.Optiverse;
import net.optiverse.optiversebackend.model.OptiverseDto;

public class OptiverseMapper {

    public static OptiverseDto mapToOptiversDto(Optiverse optiverse){
        return new OptiverseDto(
            optiverse.getId(),
            optiverse.getEmail(),
            optiverse.getPassword(),
            optiverse.getExpired()
        );
    }

    public static Optiverse mapToOptiverse(OptiverseDto optiverseDto){
        return new Optiverse(
                optiverseDto.getId(),
                optiverseDto.getEmail(),
                optiverseDto.getPassword(),
                optiverseDto.getExpired()
        );
    }

}
