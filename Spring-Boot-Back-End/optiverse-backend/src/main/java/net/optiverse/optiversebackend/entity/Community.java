package net.optiverse.optiversebackend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="comm")
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long c_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_id", referencedColumnName = "u_id")
    private User u_id;
    //In our example, each community belongs to one user. So, in the Community entity,
    // we use @ManyToOne to indicate that the User entity is on the "one" side of this relationship.

    /* Assuming there is a similar ManyToOne relationship for posts
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "p_id")
    private Post post;s
     */

    @Column(name = "c_name", unique = true)
    private String c_name;

    @Column(name = "c_description")
    private String c_description;

    @Column(name = "c_post")
    private String c_post;

    @Column(name = "c_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate c_date;

    @Column(name = "c_like")
    private Long c_like;

    @Column(name = "c_topic")
    private String c_topic;

    @Column(name = "c_mature")
    private Boolean c_mature;

}
