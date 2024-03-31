package net.optiverse.optiversebackend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {//POJO CLASS

    private Long u_id;

    private String u_email;

    private String u_pass;

    private Boolean u_expired;

    private String u_uname;

    private LocalDate u_date;
}
